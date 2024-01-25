import {createClient} from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: "h544wrq6",
    dataset: "production",
    apiVersion: '2024-01-25',
    useCdn: true
})

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source){
    return imgBuilder.image(source)
}