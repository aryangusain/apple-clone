const Note = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="text-[12px] font-extralight text-text-extralight flex flex-wrap text-left">{children}</div>
  )
}
export default Note