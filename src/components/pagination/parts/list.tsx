type Props = {
  current: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
  totalPages: number
}

export const List = (props: Props) => {

  const { totalPages, current, setCurrent } = props

  // 固定で5ページ表示
  const visiblePages = 5;

  // 表示するページ番号を取得
  const getVisiblePages = () => {
    // 2つの値を比較して、より小さい方を返すことで表示位置を調整
    const start = Math.max(1, Math.min(current - 2, totalPages - visiblePages + 1));
    return Array.from({ length: visiblePages }, (_, i) => start + i);
  };

  // ページ変更の処理（1ページずつ移動）
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrent(newPage);
  };

  // 三点リーダーの表示判定
  const shouldShowEllipsis = () => {
    return current <= totalPages - 3;
  };

  return (
    <>
      <ul className='pagination'>
        {getVisiblePages().map(number => (
          <li
            key={number}
            onClick={() => handlePageChange(number)}
          >
            <button>{number}</button>
          </li>
        ))}
      </ul>

      {/* 三点リーダー - currentPageが最後の3ページより前の場合に表示 */}
      {shouldShowEllipsis() && (
        <span>...</span>
      )}
    </>
  )
}

export default List