import React, { useLayoutEffect, useRef } from "react";

function Art() {
  const ref = useRef<HTMLPreElement>(null);
  useLayoutEffect(() => {
    if (!!ref.current) {
      [...ref.current?.children].forEach((e) => {
        const original = e.textContent;
        if (original) {
          const changed = original.replace(/1/g, "░").replace(/0/g, "▒");
          e.textContent = changed;
        }
      });
    }
  });
  return (
    <div style={{ background: "#000000", letterSpacing: "3px" }}>
      <pre ref={ref}>
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111111111111111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011111111111111111111111111
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#00ff00" }}>11111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111111111111111111000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001111111111111111111111111
        </span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#00ff00" }}>11111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111111111111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111111111111111111
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111111111111111000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111111111111111111
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111111111111111000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111111111111111111
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111111111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001111111111111111111111
        </span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>1111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011111111111111111111
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111111111111000000000000000000000000000000000000000000000000000000000000000000000000000000110000000000000000000000000000111111111111111111
        </span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>11111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111111111100000000000000000000000000000000000000000000000000000000000000000000000000001
        </span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffffff" }}>
          10000000000000000000000000001111111111111111
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111111111000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffffff" }}>
          100000000000000000000000000111111111111111
        </span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>1111111</span>
        <span style={{ color: "#00ff00" }}>11</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>00</span>
        <span style={{ color: "#ff0000" }}>11111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ffffff" }}>
          000000000000000000000000000111111111111111
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>11111111</span>
        <span style={{ color: "#00ff00" }}>11</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111111111000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>111111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ffffff" }}>
          000000000000000000000000000111111111111111
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>11111111</span>
        <span style={{ color: "#00ff00" }}>11</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111111111000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>111111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>
          000000000000000000000000000111111111111111
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1111111</span>
        <span style={{ color: "#ffff00" }}>111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>11111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>
          00000000000000000000000000001111111111111
        </span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>11111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>1</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111110000000000000000000000000000000000000000000000000000000000000000000000000000000001
        </span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>
          00000000000000000000000000000111111111111
        </span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>11111</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#00ff00" }}>1</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111111000000000000000000000000000000000000000000000000000000000000000000000000000000000001
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>
          00000000000000000000000000000011111111111
        </span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111111000000000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>11100</span>
        <span style={{ color: "#ffffff" }}>
          00000000000000000000000000001111111111
        </span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000001
        </span>
        <span style={{ color: "#00ffff" }}>1</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#00ffff" }}>1</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>0</span>
        <span style={{ color: "#ffff00" }}>000</span>
        <span style={{ color: "#ffffff" }}>
          000000000000000000000000000111111111
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#00ffff" }}>11</span>
        <span style={{ color: "#0000ff" }}>11</span>
        <span style={{ color: "#00ffff" }}>11</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>00011</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>
          00000000000000000000000000011111111
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#00ff00" }}>11111111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>1</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#00ffff" }}>1111111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>11111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>
          000000000000000000000000000011111
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>111111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111110000000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#00ffff" }}>011111111</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ffffff" }}>
          000000000000000000000000001111111
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#00ff00" }}>11</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111100000000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#00ffff" }}>011111111</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>000000000000000000000001</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#ffffff" }}>1</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#ff0000" }}>1111111111</span>
        <span style={{ color: "#00ff00" }}>111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111100000000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#00ffff" }}>0111111</span>
        <span style={{ color: "#0000ff" }}>1</span>
        <span style={{ color: "#00ffff" }}>11</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1111</span>
        <span style={{ color: "#ffffff" }}>00000000000000000000000</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#ff0000" }}>11111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#00ffff" }}>1100111111</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffff00" }}>110</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>000000000000000000000</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111110000000000000000000000000000000000000000000000000000000000000000000000000000000000001001
        </span>
        <span style={{ color: "#00ffff" }}>1111111</span>
        <span style={{ color: "#ffffff" }}>000</span>
        <span style={{ color: "#ff0000" }}>110</span>
        <span style={{ color: "#ffffff" }}>00000000000000000000</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>111111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111100000000000000000000000000000000000000000000000000000000000000000000000000000000000011
        </span>
        <span style={{ color: "#00ffff" }}>111111111</span>
        <span style={{ color: "#ffffff" }}>000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>10</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>0000000000000000001</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11111111</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>11111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#0000ff" }}>11111</span>
        <span style={{ color: "#00ffff" }}>111111</span>
        <span style={{ color: "#ffffff" }}>000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>01</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>0000000000000000001</span>
        <span style={{ color: "#00ff00" }}>111111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111100000000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#00ffff" }}>1</span>
        <span style={{ color: "#0000ff" }}>11111</span>
        <span style={{ color: "#00ffff" }}>11111</span>
        <span style={{ color: "#ffffff" }}>100</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>01</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>000000000000000000</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>111111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111100000000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>00</span>
        <span style={{ color: "#ffffff" }}>1</span>
        <span style={{ color: "#0000ff" }}>1111</span>
        <span style={{ color: "#00ffff" }}>1</span>
        <span style={{ color: "#0000ff" }}>11</span>
        <span style={{ color: "#00ffff" }}>111</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffffff" }}>00</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>10</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>000000000000000</span>
        <span style={{ color: "#ffff00" }}>01111111111</span>
        <span style={{ color: "#ff0000" }}>11111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111100000000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>01</span>
        <span style={{ color: "#00ffff" }}>111111</span>
        <span style={{ color: "#0000ff" }}>11</span>
        <span style={{ color: "#00ffff" }}>1111</span>
        <span style={{ color: "#ffffff" }}>0</span>
        <span style={{ color: "#ffff00" }}>00</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>000000000000000</span>
        <span style={{ color: "#ffff00" }}>111111111111</span>
        <span style={{ color: "#ff0000" }}>11111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111100000000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>1</span>
        <span style={{ color: "#00ffff" }}>1111111</span>
        <span style={{ color: "#0000ff" }}>11</span>
        <span style={{ color: "#00ffff" }}>111</span>
        <span style={{ color: "#ffff00" }}>100</span>
        <span style={{ color: "#ff0000" }}>0</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>000000000000000</span>
        <span style={{ color: "#ffff00" }}>1111111111111</span>
        <span style={{ color: "#ff0000" }}>1111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111000000000000000000000000000000000000000000000000000000000000000000000000000000000001
        </span>
        <span style={{ color: "#00ffff" }}>11111111111</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffff00" }}>1110</span>
        <span style={{ color: "#ffffff" }}>0000000000000001</span>
        <span style={{ color: "#ffff00" }}>11111111111111</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11111111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>1</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111100000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0000</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#00ffff" }}>111111111111</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffffff" }}>00000000000000001</span>
        <span style={{ color: "#ffff00" }}>1111111</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111100000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0000000</span>
        <span style={{ color: "#00ff00" }}>11111111</span>
        <span style={{ color: "#00ffff" }}>111</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1000</span>
        <span style={{ color: "#ffffff" }}>00000000000000001</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#00ff00" }}>111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111110000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0000</span>
        <span style={{ color: "#ff0000" }}>0000</span>
        <span style={{ color: "#ffff00" }}>000</span>
        <span style={{ color: "#00ff00" }}>011111111</span>
        <span style={{ color: "#00ffff" }}>1</span>
        <span style={{ color: "#00ff00" }}>111</span>
        <span style={{ color: "#ff0000" }}>10000</span>
        <span style={{ color: "#ffffff" }}>0000000000000000</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>11111</span>
        <span style={{ color: "#ffff00" }}>111111</span>
        <span style={{ color: "#00ff00" }}>111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111100000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>00</span>
        <span style={{ color: "#ff0000" }}>00011111</span>
        <span style={{ color: "#ffff00" }}>000</span>
        <span style={{ color: "#00ff00" }}>111111111</span>
        <span style={{ color: "#00ffff" }}>1</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>11110</span>
        <span style={{ color: "#ffffff" }}>000000000000000</span>
        <span style={{ color: "#ffff00" }}>11111111111</span>
        <span style={{ color: "#ff0000" }}>11111111</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#00ff00" }}>1111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111100000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>0011110011</span>
        <span style={{ color: "#ffff00" }}>000</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffffff" }}>1000</span>
        <span style={{ color: "#00ffff" }}>1111</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>00000000000000</span>
        <span style={{ color: "#ffff00" }}>011111111111</span>
        <span style={{ color: "#ff0000" }}>1111111111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>0011</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>000000</span>
        <span style={{ color: "#ffff00" }}>00</span>
        <span style={{ color: "#ffffff" }}>0000000</span>
        <span style={{ color: "#00ffff" }}>111</span>
        <span style={{ color: "#00ff00" }}>111</span>
        <span style={{ color: "#ffff00" }}>10</span>
        <span style={{ color: "#ffffff" }}>000000000000000</span>
        <span style={{ color: "#ffff00" }}>11111111111</span>
        <span style={{ color: "#ff0000" }}>11111111111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>001</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>000000000000000001</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ffffff" }}>0000000000000000</span>
        <span style={{ color: "#ffff00" }}>11111111</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1111111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11111</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>11</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>00000000000000000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>1111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ffffff" }}>0000000000000001</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#ff0000" }}>11111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111100000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>000</span>
        <span style={{ color: "#ffffff" }}>000000000000000000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>1111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>0000000000000001</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffff00" }}>1111111111</span>
        <span style={{ color: "#ff0000" }}>1111</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>1111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111100000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>000</span>
        <span style={{ color: "#ffffff" }}>000000000000000000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>11110</span>
        <span style={{ color: "#ffffff" }}>000000000000000</span>
        <span style={{ color: "#ffff00" }}>1111111111111</span>
        <span style={{ color: "#00ff00" }}>111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111110000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>001</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>0000000000000000000</span>
        <span style={{ color: "#ff0000" }}>11110</span>
        <span style={{ color: "#ffffff" }}>00000000000000</span>
        <span style={{ color: "#ffff00" }}>01</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>1111111</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111111000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>000</span>
        <span style={{ color: "#ffffff" }}>00000000000000000000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>1111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>0000000000000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>11111</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffff00" }}>11111111</span>
        <span style={{ color: "#00ff00" }}>11111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111111100000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>00</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>000000000000000000000</span>
        <span style={{ color: "#ff0000" }}>0111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>00000000000000</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>111111111</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#00ff00" }}>1111111111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111111000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ff0000" }}>0</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>0000000000000000000000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>011</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>0000000000000</span>
        <span style={{ color: "#ffff00" }}>01</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#00ff00" }}>11111</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#00ff00" }}>111111111111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ff0000" }}>0111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>0000000</span>
        <span style={{ color: "#ffff00" }}>00000</span>
        <span style={{ color: "#ff0000" }}>011111</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#00ff00" }}>11111</span>
        <span style={{ color: "#ffff00" }}>111111</span>
        <span style={{ color: "#00ff00" }}>11111111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111111111000000000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>00</span>
        <span style={{ color: "#ffffff" }}>000000000000000000000000000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>000000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>0101111111111</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>11111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>11111111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111111111110000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>0000011</span>
        <span style={{ color: "#ffffff" }}>1000000000000000000000000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>1111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>0000</span>
        <span style={{ color: "#ffff00" }}>00</span>
        <span style={{ color: "#ff0000" }}>111111111111111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11111111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111111111110000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>1111111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>00000000000000000000000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>1111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>000</span>
        <span style={{ color: "#ffff00" }}>00</span>
        <span style={{ color: "#ff0000" }}>11111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1111111111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>1111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111111111110000000000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>000</span>
        <span style={{ color: "#ff0000" }}>11111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>00000000000000000000000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>1111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>000</span>
        <span style={{ color: "#ffff00" }}>01</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>111111</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>1111111</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        <span style={{ color: "#ffff00" }}>1111111</span>
        <span style={{ color: "#00ff00" }}>111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111111111111000000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>000000000000</span>
        <span style={{ color: "#ff0000" }}>00</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>00000000000000000000000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>0000</span>
        <span style={{ color: "#ffff00" }}>01</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>11111111111</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffff00" }}>111111</span>
        <span style={{ color: "#00ff00" }}>111</span>
        <span style={{ color: "#ffff00" }}>11111111</span>
        <span style={{ color: "#00ff00" }}>1111111111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111111111111100000000000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0000000001100000000000000</span>
        <span style={{ color: "#ffffff" }}>0000000000000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>0000</span>
        <span style={{ color: "#ffff00" }}>01111</span>
        <span style={{ color: "#00ff00" }}>111</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#00ff00" }}>111</span>
        <span style={{ color: "#ffff00" }}>111111</span>
        <span style={{ color: "#00ff00" }}>111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>111111111111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111111111111110000000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>00000</span>
        <span style={{ color: "#ffff00" }}>011</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>11111111111</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>0011</span>
        <span style={{ color: "#ff0000" }}>100</span>
        <span style={{ color: "#ffff00" }}>00000</span>
        <span style={{ color: "#ffffff" }}>000000000000</span>
        <span style={{ color: "#ff0000" }}>011</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>0000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#00ff00" }}>111</span>
        <span style={{ color: "#ffff00" }}>111111</span>
        <span style={{ color: "#00ff00" }}>111111111111111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111111111111110000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>00</span>
        <span style={{ color: "#ff0000" }}>0</span>
        <span style={{ color: "#ffff00" }}>10</span>
        <span style={{ color: "#ffffff" }}>000</span>
        <span style={{ color: "#ffff00" }}>0111111100001110000000</span>
        <span style={{ color: "#ff0000" }}>0000</span>
        <span style={{ color: "#ffff00" }}>00000</span>
        <span style={{ color: "#ffffff" }}>000000000</span>
        <span style={{ color: "#ff0000" }}>011</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ffffff" }}>000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>011</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#00ff00" }}>111111</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>1111111111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111111111111111000000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>01</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>11110001</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>000000000000000000</span>
        <span style={{ color: "#ff0000" }}>00</span>
        <span style={{ color: "#ffff00" }}>000000000</span>
        <span style={{ color: "#ffffff" }}>000000</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>10</span>
        <span style={{ color: "#ffffff" }}>00</span>
        <span style={{ color: "#ffff00" }}>00</span>
        <span style={{ color: "#ff0000" }}>1111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>111111111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#00ff00" }}>111111111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111111111111110000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>11111111</span>
        <span style={{ color: "#ff0000" }}>1110</span>
        <span style={{ color: "#ffff00" }}>00010</span>
        <span style={{ color: "#ff0000" }}>0</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>00000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>0</span>
        <span style={{ color: "#ffff00" }}>00000</span>
        <span style={{ color: "#ff0000" }}>000000000</span>
        <span style={{ color: "#ffff00" }}>0000000</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>10000</span>
        <span style={{ color: "#ff0000" }}>01111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>11111111111111</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11111111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111111111111111000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>111111111</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>00001111</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>100000000</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>0011111000</span>
        <span style={{ color: "#ffff00" }}>100</span>
        <span style={{ color: "#ff0000" }}>001111</span>
        <span style={{ color: "#ffff00" }}>0</span>
        <span style={{ color: "#ff0000" }}>0001111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11111111111111</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11111111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111111111111111000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>11111111</span>
        <span style={{ color: "#ff0000" }}>100</span>
        <span style={{ color: "#ffff00" }}>000111</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#ff0000" }}>11100000</span>
        <span style={{ color: "#ffff00" }}>000</span>
        <span style={{ color: "#ff0000" }}>0111110000000011111011111</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>11111111111111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>111111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>1111111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          11111111111111111111000000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>1111111111</span>
        <span style={{ color: "#ff0000" }}>101</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#00ff00" }}>11111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>111100000</span>
        <span style={{ color: "#ffff00" }}>00</span>
        <span style={{ color: "#ff0000" }}>000111100111111111111111111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11111111111111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>1111111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>1111111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111111111111111100000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>011111111111</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>111111</span>
        <span style={{ color: "#00ff00" }}>111111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>111110000000111111111111111111</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#ff0000" }}>11</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>1</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>11</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>1111111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#ff0000" }}>1111111</span>
        <span style={{ color: "#00ff00" }}>1111111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          1111111111111111111110000000000000000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>01111111</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#ff0000" }}>1</span>
        <span style={{ color: "#ffff00" }}>11111111</span>
        <span style={{ color: "#00ff00" }}>11111</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#ff0000" }}>111110011111111111</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#ff0000" }}>11111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>1111</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#ff0000" }}>111</span>
        <span style={{ color: "#ffff00" }}>111</span>
        <span style={{ color: "#00ff00" }}>111111</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#ff0000" }}>111111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>111111111111</span>
        {"\n"}
        <span />
        <span style={{ color: "#ffffff" }}>
          111111111111111111111100000000000000000
        </span>
        <span style={{ color: "#ffff00" }}>011111000111111111111111111111</span>
        <span style={{ color: "#00ff00" }}>1111111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>11111111</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#ff0000" }}>1110111111111111</span>
        <span style={{ color: "#ffff00" }}>1111</span>
        <span style={{ color: "#00ff00" }}>111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#ff0000" }}>111111111</span>
        <span style={{ color: "#ffff00" }}>11111</span>
        <span style={{ color: "#ff0000" }}>1111111111</span>
        <span style={{ color: "#ffff00" }}>1</span>
        <span style={{ color: "#00ff00" }}>1111111</span>
        <span style={{ color: "#ffff00" }}>11</span>
        <span style={{ color: "#00ff00" }}>111</span>
        {"\n"}
      </pre>
    </div>
  );
}

export default Art;
