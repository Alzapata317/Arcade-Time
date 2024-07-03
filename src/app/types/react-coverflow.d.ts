declare module 'react-coverflow' {
    import { Component } from 'react';
  
    interface CoverflowProps {
      width?: number;
      height?: number;
      displayQuantityOfSide?: number;
      navigation?: boolean;
      enableHeading?: boolean;
      active?: number;
    }
  
    class Coverflow extends Component<CoverflowProps> {}
    export default Coverflow;
  }