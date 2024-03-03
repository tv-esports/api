import { Request, Response } from 'express';
import Users from '../models/user';;

/**
 * @openapi
 * /api/user/:id:
 *   get:
 *     description: Basic user information
 *     responses:
 *       200:
 *         description: {...}
 */
export const userController = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const user = await Users.findOne({ userID: id });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userObj = {
      userID: user?.userID,
      xp_level: user?.xp_level,
      xp_points: user?.xp_points,
      warnings: user?.warnings,
      inserted_at: user?.inserted_at,
      updated_at: user?.updated_at
    }

    res.json(userObj);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};