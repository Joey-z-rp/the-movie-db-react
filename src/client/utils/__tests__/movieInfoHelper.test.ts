import {
    getFormattedReleaseDate,
    getFormattedTime,
    getImageUrl,
} from '../movieInfoHelper';

describe('movie information helper functions', () => {
    describe('function: getFormattedReleaseDate', () => {
        it('should return No Date Available when called with null', () => {
            expect(getFormattedReleaseDate(null)).toBe('No Date Available');
        });

        it('should return formatted date when called with valid date string', () => {
            expect(getFormattedReleaseDate('2019-03-23')).toBe('March 2019');
        });

        it('should return Invalid Date when called with invalid date string', () => {
            expect(getFormattedReleaseDate('invalid-date-string')).toBe('Invalid Date');
        });
    });

    describe('function: getImageUrl', () => {
        it('should return fallback image url when called with null imagePath', () => {
            expect(getImageUrl(null, 300, 'fallback image url'))
                .toBe('fallback image url');
        });

        it('should return valid image url when called with valid parameters', () => {
            expect(getImageUrl('/imageUrl', 300, 'fallback image url'))
                .toBe('https://image.tmdb.org/t/p/w300/imageUrl');
        });
    });

    describe('function: getFormattedTime', () => {
        it('should return formatted time string when called with valid timeInMinute', () => {
            expect(getFormattedTime(137)).toBe('2h 17min');
        });

        it('should return 0h 0min when called with invalid timeInMinute', () => {
            expect(getFormattedTime(null)).toBe('No Runtime Available');
        });
    });
});
