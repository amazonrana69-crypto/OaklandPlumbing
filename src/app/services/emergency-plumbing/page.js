import { servicesData } from '../servicesData'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const slug = 'emergency-plumbing'
const data = servicesData[slug]

export const metadata = {
  title: data.metaTitle,
  description: data.metaDesc,
}

export default function Page() {
  return <ServicePageTemplate slug={slug} data={data} />
}
