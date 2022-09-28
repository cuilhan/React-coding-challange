// API & Hooks
import { loadImages } from '../../../src/lib/load-images';

export default async function handler(req, res) {
  try {
    const { page } = req.query;
    const images = await loadImages(page);

    res.status(200).json(images);
  } catch (error) {
    console.log(error);

    return res.status(500).send({ success: false });
  }
}
