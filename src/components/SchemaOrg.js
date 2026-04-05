export default function SchemaOrg({ service = null, breadcrumbs = [] }) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: 'Oakland Plumbing Experts',
    image: 'https://oaklandplumbingexperts.com/og-image.jpg',
    telephone: '+15105550199',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Oakland',
      addressLocality: 'Oakland',
      addressRegion: 'CA',
      postalCode: '94601',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 37.8044, longitude: -122.2712 },
    url: 'https://oaklandplumbingexperts.com',
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
    priceRange: '$$',
    areaServed: ['Oakland', 'Berkeley', 'Alameda', 'San Leandro', 'Emeryville'],
  }

  const schemas = [localBusiness]

  if (service) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: { '@type': 'Plumber', name: 'Oakland Plumbing Experts' },
      areaServed: { '@type': 'City', name: 'Oakland', containedInPlace: { '@type': 'State', name: 'California' } },
      serviceType: service.name,
    })
  }

  if (breadcrumbs.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: `https://oaklandplumbingexperts.com${b.href}`,
      })),
    })
  }

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
    </>
  )
}
