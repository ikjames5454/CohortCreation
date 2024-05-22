// types/cloudinary-react.d.ts
declare module 'cloudinary-react' {
    import * as React from 'react';
  
    export interface ImageProps {
      cloudName: string;
      publicId: string;
      width?: number; 
      crop?: 'fill' | 'fit' | 'limit' | 'thumb' | string;
      [key: string]: any;
    }
  
    export class Image extends React.Component<ImageProps> {}
  
    export interface VideoProps {
      cloudName: string;
      publicId: string;
      [key: string]: any;
    }
  
    export class Video extends React.Component<VideoProps> {}
  
    export interface TransformationProps {
      [key: string]: any;
    }
  
    export class Transformation extends React.Component<TransformationProps> {}
  }
  