import FooterLegal from "./FooterLegal"
import FooterNav from "./FooterNav"
import FooterNotes from "./FooterNotes"

const Footer = () => {

  return (
    <div className="flex justify-center w-full bg-text-secondary text-center py-[16px] font-semibold mt-[10px]">
      <div className="flex flex-col max-w-[980px] justify-center items-center px-[20px]">
        <FooterNotes />
        <div className="w-full border-t border-t-neutral-300 my-[20px]"></div>
        <FooterNav />
        <FooterLegal />
      </div>
    </div>
  )
}
export default Footer