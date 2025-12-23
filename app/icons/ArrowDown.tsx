type IconProps = React.SVGProps<SVGAElement>;

export function ArrowDown({ className, ...props }: IconProps) {
    return(
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="50" fill="#0E0E0E" fill-opacity="0.32"/>
                <rect x="15" y="15" width="70" height="70" rx="35" fill="url(#paint0_linear_6746_220)"/>
                <path d="M37.5 45L50 57.5L62.5 45" stroke="#433D60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
                <linearGradient id="paint0_linear_6746_220" x1="87" y1="52.5" x2="15" y2="55.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C0B7E8"/>
                    <stop offset="1" stop-color="#8176AF"/>
                </linearGradient>
            </defs>
        </svg>
    );
}