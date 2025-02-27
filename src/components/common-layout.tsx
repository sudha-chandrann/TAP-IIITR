interface CommonLayoutProps {
    title: string;
    children: React.ReactNode,
    id?:string
}
const CommonLayout = ({ title, children, id }: CommonLayoutProps) => {
    return (
        <div className="flex flex-col lg:px-28 md:px-14 sm:px-8 px-4" id={id} >
            <h1 className="text-primary font-bold text-2xl md:text-4xl text-center my-12">
                {title}
            </h1>

            {children}
        </div>
    )
}
export default CommonLayout