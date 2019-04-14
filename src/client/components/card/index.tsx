import * as React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { ICardProps } from '../../interfaces/components/card';
import {
    VOTE_COLOR_HIGH,
    VOTE_COLOR_LOW,
    VOTE_COLOR_MEDIUM,
} from '../../../common/constants/theme';
import {
    Card,
    ImageWrapper,
    ReleaseDate,
    Title,
    Vote,
} from './style';

class StyledCard extends React.PureComponent<ICardProps> {
    render() {
        const {
            linkUrl,
            posterUrl,
            releaseDate,
            title,
            voteAverage,
        } = this.props;

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
    }
}

export default StyledCard;

function getColor(percentage: number): string {
    if (percentage > 79) return VOTE_COLOR_HIGH;
    if (percentage > 49) return VOTE_COLOR_MEDIUM;
    return VOTE_COLOR_LOW;
}
