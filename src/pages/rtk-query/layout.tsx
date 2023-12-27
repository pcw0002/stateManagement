import { Provider } from 'react-redux'
import { store } from '../../utils/store';

export default function RTKLayout({ children }: { children: React.ReactNode }) {
  /* eslint-disable */
  return (
    <Provider store={store}>
      <div className="flex h-screen flex-col md:overflow-hidden">
        <div className="w-full text-center p-4">
          <p className='text-xl font-bold'>RTK Query Examples</p>
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </Provider>
  );
}