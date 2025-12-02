import { supabase } from '../config/supabaseClient.js';

export const authenticateToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ success: false, error: 'No token provided' });
        }

        const token = authHeader.replace('Bearer ', '');
        const { data: { user }, error } = await supabase.auth.getUser(token);

        if (error) throw error;

        req.user = { id: user.id };
        next();
    } catch (error) {
        res.status(401).json({ success: false, error: 'Invalid token' });
    }
};