import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-fuchsia-500 opacity-80 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Oops! Không tìm thấy trang.
        </h2>
        <p className="text-slate-400 mb-8 max-w-md">
          Có vẻ như chapter hoặc tập phim bạn đang tìm kiếm đã bị hố đen vũ trụ nuốt chửng, hoặc nó chưa từng tồn tại.
        </p>
        <Link to="/" className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-transform hover:scale-105 shadow-lg shadow-purple-500/20">
          Về Trang Chủ
        </Link>
      </div>
    </Layout>
  );
}
