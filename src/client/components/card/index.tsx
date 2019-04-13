import * as React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { ICardProps } from '../../interfaces/components/card';
import {
    Card,
    ImageWrapper,
    ReleaseDate,
    Title,
    Vote,
} from './style';

const StyledCard: React.FunctionComponent<ICardProps> = (props) => {
    const {
        linkUrl,
        posterUrl,
        releaseDate,
        title,
        voteAverage,
    } = props;

    return (
        <Card>
            <Vote
                bgcolor={getColor(voteAverage)}
                circular
            >
                {voteAverage}%
            </Vote>
            <ImageWrapper>
                <Link to={linkUrl}>
                    <Image
                        fluid
                        src={posterUrl}
                    />
                </Link>
            </ImageWrapper>
            <Title>{title}</Title>
            <ReleaseDate>{releaseDate}</ReleaseDate>
        </Card>
    );
};

export default StyledCard;

function getColor(percentage: number): string {
    if (percentage > 79) return '#01D277';
    if (percentage > 49) return '#4902A3';
    return '#D1225B';
}
