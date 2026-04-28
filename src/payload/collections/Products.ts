import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'Product Name',
        },
        {
            name: 'shortDescription',
            type: 'text',
            required: true,
            label: 'Short Description',
        },
        {
            name: 'description',
            type: 'richText',
            required: true,
            label: 'Full Description',
        },
        {
            name: 'price',
            type: 'number',
            required: true,
            label: 'Price (USD)',
            min: 0,
        },
        {
            name: 'category',
            type: 'select',
            required: true,
            label: 'Category',
            options: [
                { label: 'Men', value: 'men' },
                { label: 'Women', value: 'women' },
                { label: 'Kids', value: 'kids' },
                { label: 'Accessories', value: 'accessories' },
            ],
        },
        {
            name: 'sizes',
            type: 'select',
            hasMany: true,
            label: 'Available Sizes',
            options: [
                { label: 'XS', value: 'XS' },
                { label: 'S', value: 'S' },
                { label: 'M', value: 'M' },
                { label: 'L', value: 'L' },
                { label: 'XL', value: 'XL' },
                { label: 'XXL', value: 'XXL' },
            ],
        },
        {
            name: 'colors',
            type: 'array',
            label: 'Available Colors',
            fields: [
                {
                    name: 'color',
                    type: 'text',
                    label: 'Color',
                    required: true,
                },
            ],
        },
        {
            name: 'images',
            type: 'array',
            label: 'Product Images',
            fields: [
                {
                    name: 'url',
                    type: 'text',
                    label: 'Image URL',
                    required: true,
                },
                {
                    name: 'alt',
                    type: 'text',
                    label: 'Alt Text',
                },
            ],
        },
        {
            name: 'inStock',
            type: 'checkbox',
            label: 'In Stock',
            defaultValue: true,
        },
    ],
}
