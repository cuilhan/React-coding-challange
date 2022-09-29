import type { NextApiRequest, NextApiResponse } from 'next';

// API & Hooks
import { loadImages } from '@lib/load-images';

type Data = {
  images?: any;
  success?: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { page } = req.query;
    const images = await loadImages(Number(page));

    res.status(200).json(images);
  } catch (error) {
    console.log(error);

    return res.status(500).send({ success: false });
  }
}
