import { Studio } from 'sanity'
import config from './sanity.config.js'  // adjust path if needed

export default function AdminPanel() {
  return <Studio config={config} />
}
