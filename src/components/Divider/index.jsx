import { DividerStyle } from "./style";

export function Divider({children}) {
  return (
    <DividerStyle>
        <span class="line"></span>
            <div className="divider">
                <h2>{children}</h2>
            </div>
        <span class="line"></span>
    </DividerStyle>
  );
}