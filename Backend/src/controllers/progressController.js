import { supabase } from '../config/supabaseClient.js';

// Check if progress exists for a student and quest
export const checkProgress = async (req, res) => {
    try {
        const { studentId, questId } = req.params;

        if (!studentId || !questId) {
            return res.status(400).json({
                success: false,
                message: 'Missing studentId or questId'
            });
        }

        const { data, error } = await supabase
            .from('quest_progress')
            .select('*')
            .eq('student_id', studentId)
            .eq('quest_id', questId)
            .single();

        if (error && error.code !== 'PGRST116') { // PGRST116 = no rows found
            throw error;
        }

        res.status(200).json({
            success: true,
            hasProgress: !!data,
            data: data || null
        });

    } catch (error) {
        console.error('Error checking progress:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to check progress',
            error: error.message
        });
    }
};

// Save or update progress
export const saveProgress = async (req, res) => {
    try {
        const { student_id, quest_id, current_section, progress_percentage, last_checkpoint } = req.body;

        if (!student_id || !quest_id) {
            return res.status(400).json({
                success: false,
                message: 'Missing student_id or quest_id'
            });
        }

        // Upsert (insert or update if exists)
        const { data, error } = await supabase
            .from('quest_progress')
            .upsert({
                student_id,
                quest_id,
                current_section: current_section || 'instructions',
                progress_percentage: progress_percentage || 0,
                last_checkpoint: last_checkpoint || {},
                completed: progress_percentage === 100,
                updated_at: new Date().toISOString()
            }, {
                onConflict: 'student_id,quest_id' // Update if this combination exists
            })
            .select()
            .single();

        if (error) {
            throw error;
        }

        res.status(200).json({
            success: true,
            message: 'Progress saved successfully',
            data: data
        });

    } catch (error) {
        console.error('Error saving progress:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to save progress',
            error: error.message
        });
    }
};

// Reset progress (for "New Game" option)
export const resetProgress = async (req, res) => {
    try {
        const { student_id, quest_id } = req.body;

        if (!student_id || !quest_id) {
            return res.status(400).json({
                success: false,
                message: 'Missing student_id or quest_id'
            });
        }

        const { error } = await supabase
            .from('quest_progress')
            .delete()
            .eq('student_id', student_id)
            .eq('quest_id', quest_id);

        if (error) {
            throw error;
        }

        res.status(200).json({
            success: true,
            message: 'Progress reset successfully'
        });

    } catch (error) {
        console.error('Error resetting progress:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to reset progress',
            error: error.message
        });
    }
};