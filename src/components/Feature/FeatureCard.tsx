import type {FC} from 'react';
interface FeatureCardProps {
    icon: any;
    title: string;
    description: string;
}
const FeatureCard: FC<FeatureCardProps> = ({icon, title, text}) => {
    return(
        <div>
            <div>{icon}</div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default FeatureCard;