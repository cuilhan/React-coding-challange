// API & Hooks
import { loadImages } from '../../../src/lib/load-images';

export default async function handler(req, res) {
  const { page } = req.query;
  const images = await loadImages(page);

  res.status(200).json(images);
}