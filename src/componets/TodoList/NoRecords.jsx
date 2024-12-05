import norecord from '../../assets/norecord.png';

function NoRecords() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img className='w-[50px]' src={norecord} alt="no records" />
            <h1 className='text-2xl text-white'>No Records Found</h1>
        </div>
    )
}

export default NoRecords;