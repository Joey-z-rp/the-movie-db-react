import { format } from 'date-fns';
import { IMAGE_URL_BASE } from '../../common/constants';

export function getFormattedReleaseDate(date: string | null): string {
    if (!date) return 'No Date Available';

    return format(new Date(date), 'MMMM YYYY');
}

export function getImageUrl(
    imagePath: string | null,
    width: number,
    fallbackImage: string,
): string {
    if (!imagePath) return fallbackImage;

    return `${IMAGE_URL_BASE}${width}${imagePath}`;
}

export function getFormattedTime(timeInMinute: number | null): string {
    if (!timeInMinute) return 'No Runtime Available';

    const hour = Math.floor(timeInMinute / 60);
    const minute = timeInMinute % 60;

    return `${hour}h ${minute}min`;
}
