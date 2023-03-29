import image1 from "../../../../public/images/slides_home/slide-1.png"
import image2 from '../../../../public/images/slides_home/slide-2.png'
import image3 from '../../../../public/images/slides_home/slide-3.png'
import image4 from '../../../../public/images/slides_home/slide-4.png'
import image5 from '../../../../public/images/slides_home/slide-5.png'

export const images: string[] = [image1, image2, image3, image4, image5]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
