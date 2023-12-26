import { BsFillPlayFill } from 'react-icons/bs';
import { BiChevronDown } from 'react-icons/bi';
import { useRouter } from 'next/router';
import FavoriteButton from './FavoriteButton';
import PlayButton from './PlayButton';
import useInfoModal from '../hooks/useInfoModal';
interface MovieCardProps {
	data: Record<string, any>;
}
const CURRENT_YEAR = new Date().getFullYear();
const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
	const router = useRouter();
	const { openModal } = useInfoModal();
	const { thumbnailUrl, duration, genre, releasedDate, createdAt, id } = data;
	const createdAtYear = new Date(createdAt).getFullYear();
	return (
		<div
			className='group bg-zinc-900 col-span-1 relative'
			onClick={() => {
				router.push(`/watch/${id}`);
			}}
		>
			<div className='aspect-w-16 aspect-h-9'>
				<img
					className='
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-md
            group-hover:opacity-90
            sm:group-hover:opacity-0
            delay-300
            '
					src={thumbnailUrl}
					alt='Thumbnail'
				/>
			</div>

			<div
				className='
        opacity-0
        absolute
        top-0
        transition
        direction-200
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100
'
			>
				<img
					className='
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-t-md
            w-full
            h-[12vw]
            '
					src={thumbnailUrl}
					alt='Thumbnail'
				/>
				<div
					className='
      z-10
      bg-zinc-800
      p-2
      lg:p-4
      absolute
      w-full
      transition
      shadow-md
      rounded-b-md

    '
				>
					<div className='flex flex-row items-center gap-3'>
						<div
							onClick={() => {
								router.push(`/watch/${id}`);
							}}
							className='
              cursor-pointer
              w-6
              h-6
              lg:w-10
              lg:h-10
              bg-white
              rounded-full
              flex
              justify-center
              items-center
              transition
              hover:bg-neutral-300

            '
						>
							<BsFillPlayFill size={25} />
						</div>
						<FavoriteButton movieId={id} />
						<div
							className='
            cursor-pointer
            ml-auto
            group/item
            w-6
            h-6
            lg:w-10 
            lg:h-10 
            border-white 
            border-2 
            rounded-full 
            flex 
            justify-center 
            items-center 
            transition 
            hover:border-neutral-300 '
						>
							<BiChevronDown
								onClick={() => openModal(id)}
								size={25}
								className='text-white group-hover/item:text-neutral-300'
							/>
						</div>
					</div>
					<p className='text-green-400 font-semibold mt-4'>
						{createdAtYear === CURRENT_YEAR ? 'New' : ''}{' '}
						<span className='text-white'>{releasedDate}</span>
					</p>
					<div className='flex flex-row mt-4 gap-2 items-center'>
						<p className='text-white text-[10px] lg:text-sm'>{duration}</p>
					</div>
					<div className='flex flex-row mt-4 gap-2 items-center'>
						<p className='text-white text-[10px] lg:text-sm'>{genre}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MovieCard;
