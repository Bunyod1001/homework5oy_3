import Aside from "../aside/aside";
import { AsideHeader } from "./header";

export function Div() {
    return (
        <div class="container d-flex">
            <Aside />
            <AsideHeader />
        </div>
    );
}