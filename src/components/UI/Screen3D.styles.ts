import styled from "styled-components";

export const Screen = styled.div`
  /* /!\ You need to add vendor prefixes in order to render the CSS properly (or simply use http://leaverou.github.io/prefixfree/) /!\ */
  perspective: 700px;
  /* overflow: hidden; */
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 112.5%;
  align-items: center;
  justify-content: center;

  .scene {
    transform: rotateX(-18deg) rotateY(-44deg);
    animation: animate 4s linear infinite;

    @keyframes animate {
      0% {
        transform: rotateX(-18deg) rotateY(-44deg);
      }
      50% {
        transform: rotateX(-20deg) rotateY(-50deg) rotateZ(1deg);
      }
      100% {
        transform: rotateX(-18deg) rotateY(-44deg);
      }
    }
  }

  .face {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.4);
  }
  .scene,
  .shape,
  .face,
  .face-wrapper,
  .cr {
    position: absolute;
    transform-style: preserve-3d;
  }
  .scene {
    width: 80em;
    height: 80em;
    top: 50%;
    left: 50%;
    margin: -40em 0 0 -40em;
  }
  .shape {
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    transform-origin: 50%;
  }
  .face,
  .face-wrapper {
    overflow: hidden;
    transform-origin: 0 0;
    backface-visibility: hidden;
    /* hidden by default, prevent blinking and other weird rendering glitchs */
  }
  .face {
    background-size: 100% 100% !important;
    background-position: center;
  }
  .face-wrapper .face {
    left: 100%;
    width: 100%;
    height: 100%;
  }
  .photon-shader {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .side {
    left: 50%;
  }
  .cr,
  .cr .side {
    height: 100%;
  }
  [class*="cuboid"] .ft,
  [class*="cuboid"] .bk {
    width: 100%;
    height: 100%;
  }
  [class*="cuboid"] .bk {
    left: 100%;
  }
  [class*="cuboid"] .rt {
    transform: rotateY(-90deg) translateX(-50%);
  }
  [class*="cuboid"] .lt {
    transform: rotateY(90deg) translateX(-50%);
  }
  [class*="cuboid"] .tp {
    transform: rotateX(90deg) translateY(-50%);
  }
  [class*="cuboid"] .bm {
    transform: rotateX(-90deg) translateY(-50%);
  }
  [class*="cuboid"] .lt {
    left: 100%;
  }
  [class*="cuboid"] .bm {
    top: 100%;
  }
  [class*="cylinder"] .tp {
    transform: rotateX(90deg) translateY(-50%);
  }
  [class*="cylinder"] .bm {
    transform: rotateX(-90deg) translateY(-50%);
  }
  [class*="cylinder"] .tp,
  [class*="cylinder"] .bm,
  [class*="cylinder"] .tp .photon-shader,
  [class*="cylinder"] .bm .photon-shader {
    border-radius: 50%;
  }
  [class*="cylinder"] .bm {
    top: 100%;
  }
  /* .cub-1 styles */
  .cub-1 {
    transform: translate3D(6.6875em, -2.9930555555555554em, 1.9375em)
      rotateX(0deg) rotateY(-540.3deg) rotateZ(0deg);
    opacity: 1;
    width: 12.750001713469072em;
    height: 0.7777777777777777em;
    margin: -0.38888888888888884em 0 0 -6.375000856734536em;
  }
  .cub-1 .ft {
    transform: translateZ(2.0625em);
  }
  .cub-1 .bk {
    transform: translateZ(-2.0625em) rotateY(180deg);
  }
  .cub-1 .rt,
  .cub-1 .lt {
    width: 4.125em;
    height: 0.7777777777777777em;
  }
  .cub-1 .tp,
  .cub-1 .bm {
    width: 12.750001713469072em;
    height: 4.125em;
  }
  .cub-1 .face {
    background-color: #ffffff;
  }
  /* .cyl-1 styles */
  .cyl-1 {
    transform: translate3D(6.75em, -5.625em, 1.875em) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg);
    opacity: 1;
    width: 1.75em;
    height: 4.625em;
    margin: -2.3125em 0 0 -0.875em;
  }
  .cyl-1 .tp,
  .cyl-1 .bm {
    width: 1.75em;
    height: 1.75em;
  }
  .cyl-1 .side {
    width: 0.4244260801827624em;
    height: 4.625em;
  }
  .cyl-1 .s0 {
    transform: rotateY(12.857142857142858deg) translate3D(-50%, 0, 0.85em);
  }
  .cyl-1 .s1 {
    transform: rotateY(38.57142857142857deg) translate3D(-50%, 0, 0.85em);
  }
  .cyl-1 .s2 {
    transform: rotateY(64.28571428571429deg) translate3D(-50%, 0, 0.85em);
  }
  .cyl-1 .s3 {
    transform: rotateY(90deg) translate3D(-50%, 0, 0.85em);
  }
  .cyl-1 .s4 {
    transform: rotateY(115.71428571428572deg) translate3D(-50%, 0, 0.85em);
  }
  .cyl-1 .s5 {
    transform: rotateY(141.42857142857144deg) translate3D(-50%, 0, 0.85em);
  }
  .cyl-1 .s6 {
    transform: rotateY(167.14285714285714deg) translate3D(-50%, 0, 0.85em);
  }
  .cyl-1 .s7 {
    transform: rotateY(192.85714285714286deg) translate3D(-50%, 0, 0.85em);
  }
  .cyl-1 .s8 {
    transform: rotateY(218.57142857142858deg) translate3D(-50%, 0, 0.85em);
  }
  .cyl-1 .s9 {
    transform: rotateY(244.2857142857143deg) translate3D(-50%, 0, 0.85em);
  }
  .cyl-1 .s10 {
    transform: rotateY(270deg) translate3D(-50%, 0, 0.85em);
  }
  .cyl-1 .s11 {
    transform: rotateY(295.7142857142857deg) translate3D(-50%, 0, 0.85em);
  }
  .cyl-1 .s12 {
    transform: rotateY(321.4285714285714deg) translate3D(-50%, 0, 0.85em);
  }
  .cyl-1 .s13 {
    transform: rotateY(347.1428571428571deg) translate3D(-50%, 0, 0.85em);
  }
  .cyl-1 .face,
  .cyl-1 .side {
    background-color: #ffffff;
  }
  /* .cub-2 styles */
  .cub-2 {
    transform: translate3D(7.125em, -10.125em, 2.9375em) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg);
    opacity: 1;
    width: 18em;
    height: 10.25em;
    margin: -5.125em 0 0 -9em;
  }
  .cub-2 .ft {
    transform: translateZ(0.3125em);
  }
  .cub-2 .bk {
    transform: translateZ(-0.3125em) rotateY(180deg);
  }
  .cub-2 .rt,
  .cub-2 .lt {
    width: 0.625em;
    height: 10.25em;
  }
  .cub-2 .tp,
  .cub-2 .bm {
    width: 18em;
    height: 0.625em;
  }
  .cub-2 .face {
    background-color: #ffffff;
  }
`;
