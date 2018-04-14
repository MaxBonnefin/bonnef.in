import React from 'react'
import Link from 'gatsby-link'
import styles from "./style.module.css";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'black',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      <h1 className={styles.vaporwave}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
		  }}
        >
          {siteTitle}
        </Link>
      </h1>
	  <h3 style={{color:'white'}} className={styles.vaporwave}>
	    ｍａｘ＠ｂｏｎｎｅｆ．ｉｎ　ツイス
      </h3>  
		<div>
          <table cellpadding="9">
            <tbody>
              <tr>
				<td>
				  <Link 
					to="/" 
			       	style={{
            		  color: 'white',
                      textDecoration: 'none',
                    }}
 				  >
					ＢＬＯＧ
				  </Link>
				</td>
				<td>
      		      <Link 
					to="/" 
			       	style={{
            		  color: 'white',
                      textDecoration: 'none',
                    }}
 				  >
				    ＣＶ
				  </Link>
				</td>
	     		<td>
				  <Link 
					to="/" 
			       	style={{
            		  color: 'white',
                      textDecoration: 'none',
                    }}
 				  >
				    ＱＵＯＴＥＳ 
				  </Link>
				</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  </div>
)

export default Header
