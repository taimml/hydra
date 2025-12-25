import { SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement> & {
    size?: number;
    color?: string;
    className?: string;
};