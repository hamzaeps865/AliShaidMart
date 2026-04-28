import { NotFoundPage } from '@payloadcms/next/views'
import configPromise from '@payload-config'

type Args = {
    params: Promise<{
        segments: string[]
    }>
    searchParams: Promise<{ [key: string]: string | string[] }>
}

const NotFound = ({ params, searchParams }: Args) =>
    NotFoundPage({ config: configPromise, params, searchParams })

export default NotFound
