import { Button } from "../../components/elements/buttons/Button";

export function Presentation() {
    return (<div style={{backgroundColor: "black", paddingBottom: 30, display: "flex", flexDirection:"column", alignItems: "center"}}>
        <div style={{position: "relative", width: "100%", height: 0, paddingTop: "56.2500%", paddingBottom: 0, 
        boxShadow:" 0 2px 8px 0 rgba(63,69,81,0.16)", marginBottom: "0.9em", overflow: "hidden", willChange: "transform"}}>
            <iframe loading="lazy" style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0}}
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFRYeokDV0&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
            </iframe>
        </div>
        <Button string="HOMEPAGE" link="/" className="button-purple" />
        
    </div>
    )
}
