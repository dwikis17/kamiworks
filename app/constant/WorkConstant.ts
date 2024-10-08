import { WorkCardProps } from '@/components/ui/WorkCard'
import image1 from '@/public/mbp1.png'
import image2 from '@/public/mbp2.png'
import work1 from '@/public/work1.svg'
import work1png from '@/public/work1.png'
export const workConstants: WorkCardProps[] = [
    {
        name: 'KATO LAUNDRY',
        image: work1png,
        link: 'https://www.katolaundry.shop',
        index: 0
    },
    {
        name: 'Barbershop',
        image: image2,
        link: 'https://barbershop-opal-sigma.vercel.app/',
        index: 1
    },
]