import { DividerStyle } from "./style";

export function Divider({children}) {
  return (
    <DividerStyle>
        <span className="line"></span>
            <div className="divider">
                <h2>{children}</h2>
            </div>
        <span className="line"></span>
    </DividerStyle>
  );
}