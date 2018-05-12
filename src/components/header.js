import React from 'react'
import Link from 'gatsby-link'

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
      <h1>
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
		<div>
          <table cellpadding="9">
            <tbody>
              <tr>
				<td>
				  <Link 
					to="/blog/"
			       	style={{
            		  color: 'white',
                      textDecoration: 'none',
                    }}
 				  >
					Blog
				  </Link>
				</td>
				<td>
      		      <Link 
					to="/cv"
			       	style={{
            		  color: 'white',
                      textDecoration: 'none',
                    }}
 				  >
				    CV
				  </Link>
				</td>
	     		<td>
				  <Link 
					to="/about"
			       	style={{
            		  color: 'white',
                      textDecoration: 'none',
                    }}
 				  >
				    About
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
