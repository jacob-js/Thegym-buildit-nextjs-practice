import Link from "next/link";

function Footer(){
return(
    <>
    <div className="bg-dark-text text-white py-24 mt-10">
        <div className="max-w-5xl mx-auto flex justify-between">
            <div className="flex justify-between flex-col space-y-12">
                <div>
                <h2 className="text-2xl font-bold mb-4">Buildit</h2>
                <p>Development company, 2022 </p>
                </div>
                <div >
                <p>Site design-⏰ Alarm</p>
                </div>

            </div>
            <div className='flex flex-col space-y-5'>
                <Link href="">service1</Link>
                <Link href="">service2</Link>
                <Link href="">service3</Link>
                <Link href="">service4</Link>
                <div className="flex gap-5">
                    <div className="bg-white bg-opacity-20 w-10 h-10 rounded-md flex items-center justify-center">
                        <img src="/icon/insta.svg" alt=""/>
                    </div>
                    <div className="bg-white bg-opacity-20 w-10 h-10 rounded-md flex items-center justify-center">
                        <img src="/icon/fb.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col space-y-5'>
                <Link href="">About us</Link>
                <Link href="">Services</Link>
                <Link href="">Projects</Link>
                <Link href="">Contact</Link>

            </div>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <Link href="">Get in touch</Link>
                    <p>60 Manor Station St. Fairport,</p>
                    <p>NY 14450</p>
                </div>
                <div className="">
                    <div>708-708-708</div>
                    <div>sales@buildit.site</div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}
export default Footer;