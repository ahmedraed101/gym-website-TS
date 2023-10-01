import { SelectedPage } from "./types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    setSelectedPage: (page: SelectedPage) => void
    children: string
}

const ActionButton = ({setSelectedPage, children}: Props) => {
    return (
        <AnchorLink 
            className="rounded-md bg-secondary-500 px-10 py-2 transition ease-in-out duration-200 hover:bg-primary-500 hover:text-white cursor-pointer"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    )
}

export default ActionButton