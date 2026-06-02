type btnProp = {
    btnText: string;
    styleClass?: string;
}

export default function GenericButton (props: btnProp) {
    return (
        <button className={`${props.styleClass} bg-edvow-blue text-white px-8 py-4 font-heading uppercase tracking-widest text-xs hover:bg-edvow-orange transition-all`}>{props.btnText}</button>
    )
}