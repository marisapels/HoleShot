import * as React from 'react';
import { NavMenu } from './NavMenu/NavMenu';
import { Header } from './Header/Header';
import { SideBar } from './SideBar/SideBar';
import { Footer } from './Footer';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div>
                    <Header />
                    <NavMenu />
                    <div className="content-wrapper">
                        <section className="content-header">
                        <h1>
                            Blank page
                            <small>it all starts here</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                            <li><a href="#">Examples</a></li>
                            <li className="active">Blank page</li>
                        </ol>
                        </section>
                        <section className="content">
                            { this.props.children }
                        </section>
                    </div> 
                    <SideBar />
                    <Footer /> 
                    
                </div>
               
            ;
    }
}


