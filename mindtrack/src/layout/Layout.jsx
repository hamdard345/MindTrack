import Navbar from '../components/navigation/Navbar'
/**
 * The Layout component serves as a structural wrapper for the application's pages.
 * It is designed to provide a consistent layout across different views in the app.
 * Wrap this component around any page-level component to ensure the Navbar is included on the page
 * and the layout remains consistent. The `children` prop is used to render the specific content of each page.
 * Props:
 * - children: ReactNode - The content to be displayed within the layout. This can be any React component or JSX.
 */
const Layout = ({ children }) =>{
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}
export default Layout;