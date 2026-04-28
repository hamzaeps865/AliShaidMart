import {
    DELETE as REST_DELETE,
    GET as REST_GET,
    OPTIONS,
    PATCH as REST_PATCH,
    POST as REST_POST,
    PUT as REST_PUT,
} from '@payloadcms/next/routes'
import configPromise from '@payload-config'

export const GET = REST_GET(configPromise)
export const POST = REST_POST(configPromise)
export const DELETE = REST_DELETE(configPromise)
export const PATCH = REST_PATCH(configPromise)
export const PUT = REST_PUT(configPromise)
export { OPTIONS }
