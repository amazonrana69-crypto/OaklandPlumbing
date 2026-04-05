import { areasData } from '../areasData'
import AreaPageTemplate from '@/components/AreaPageTemplate'

const slug = 'emeryville'
const data = areasData[slug]

export const metadata = {
  title: data.metaTitle,
  description: data.metaDesc,
}

export default function Page() {
  return <AreaPageTemplate slug={slug} data={data} />
}
