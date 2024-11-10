// import { sprinkles } from '@/styles/utils/sprinkles.css';
import { pagination, pagination_item, pagination_item_button, pagination_item_active } from '../style.css'

type Props = {
  current: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
  totalPages: number
}

export const List = (props: Props) => {

  const { totalPages, current, setCurrent } = props

  // 固定で5ページ表示
  const visibleNum = 5;
  const visiblePages = (totalPages > visibleNum) ? visibleNum : totalPages;

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
    return totalPages > visibleNum && current <= totalPages - 3;
  };

  return (
    <>
      <ul
        className={pagination}
      >
        {getVisiblePages().map(number => (
          <li
            key={number}
            onClick={() => handlePageChange(number)}
            className={`${pagination_item} ${current === number ? pagination_item_active : ''}`}
          >
            <button className={pagination_item_button}><span>{number}</span></button>
          </li>
        ))}
        {/* 三点リーダー currentPageが最後の3ページより前の場合に表示 */}
        {shouldShowEllipsis() && (
          <>
            <li><span>...</span></li>
            <li
              onClick={() => handlePageChange(totalPages)}
              className={pagination_item}
            >
              <button className={pagination_item_button}><span>{totalPages}</span></button>
            </li>
          </>
        )}
      </ul>
    </>
  )
}

export default List