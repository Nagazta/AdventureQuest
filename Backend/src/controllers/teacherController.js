import { supabase } from '../config/supabaseClient.js';

export const getDashboardData = async (req, res) => {
    try {
        const teacherId = req.user.id;

        // Get teacher's students
        const { data: students, error: studentsError } = await supabase
            .from('Student')
            .select(`
        *,
        Users!Student_user_id_fkey (
          fullname,
          email
        )
      `)
            .eq('teacher_id', teacherId);

        if (studentsError) throw studentsError;

        const formattedStudents = students.map(s => ({
            ...s,
            fullname: s.Users?.fullname || 'Unknown',
            email: s.Users?.email || '',
            overall_progress: s.overall_progress || 0
        }));

        const totalStudents = formattedStudents.length;
        const averageProgress = totalStudents > 0
            ? Math.round(formattedStudents.reduce((sum, s) => sum + (s.overall_progress || 0), 0) / totalStudents)
            : 0;

        const topPerformers = formattedStudents
            .sort((a, b) => (b.overall_progress || 0) - (a.overall_progress || 0))
            .slice(0, 5);

        res.json({
            success: true,
            data: {
                students: formattedStudents,
                statistics: {
                    totalStudents,
                    activeNow: 0,
                    averageProgress,
                    needAttention: 0
                },
                topPerformers
            }
        });
    } catch (error) {
        console.error('Dashboard error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

export const createStudent = async (req, res) => {
    try {
        const teacherId = req.user.id;
        const { email, password, firstName, lastName } = req.body;

        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
        });

        if (authError) throw authError;

        const { data: userData, error: userError } = await supabase
            .from('Users')
            .insert([{
                user_id: authData.user.id,
                username: email.split('@')[0],
                email,
                fullname: `${firstName} ${lastName}`.trim(),
                role: 'student',
            }])
            .select()
            .single();

        if (userError) throw userError;

        const { data: studentData, error: studentError } = await supabase
            .from('Student')
            .insert([{
                user_id: authData.user.id,
                teacher_id: teacherId,
            }])
            .select()
            .single();

        if (studentError) throw studentError;

        res.status(201).json({
            success: true,
            data: { user: userData, student: studentData }
        });
    } catch (error) {
        console.error('Create student error:', error);
        res.status(400).json({ success: false, error: error.message });
    }
};