<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bitnami_wordpress' );

/** Database username */
define( 'DB_USER', 'bn_wordpress' );

/** Database password */
define( 'DB_PASSWORD', '1950d1bba5db05848b0bbc3f5d46e2439fa5c9ec571f491e98180e79a00a6dd5' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'HsJONhnLg^j;O<1ls+5d2jH%B7vwMWN<_,*@NX=<T in*)f.v&+loTb~CC5<[mz-' );
define( 'SECURE_AUTH_KEY',  '/q/l?+L>!B?niXZ {=r<SuD`W#,v4|^x ?]*GBA1w,&0A9l__Ld~WT4}HXG3]L`3' );
define( 'LOGGED_IN_KEY',    'q=UxdDz%a.]<nEs7H |.mV8paYfMJw=RJJ<I ;bKohrL/jZ7<epfT@1kFn6_dGT1' );
define( 'NONCE_KEY',        '1^5s7OVyf^$e` +NSfX7=s,f`WT(>bx$4o696>E6|4a$4KxC@=2Ni(MF7_XsSi]m' );
define( 'AUTH_SALT',        'G.|8qZ4c^42d2-)`P6(vsZGqr8|A/:r).<&i+-?^#xKD%;(SU.T[#AHOT?]O#F:3' );
define( 'SECURE_AUTH_SALT', 'AVwq <:d3|I=AXU~zhI)x:n((TcVw}ogmCvwmoe57X5GNOWpa!j+.2A0k<2]0Y?8' );
define( 'LOGGED_IN_SALT',   '<G#4m{FG%*p96?@8^o|#N$`C`FzXQ^f`=LKj,~RcMn}lO)AB(Kx{=&=T,-XTSLVd' );
define( 'NONCE_SALT',       '348.-VVu-^*nvK/CT4-F=`fxh:,qm.f9M9L1;<Aqwe-RHP]CG 7v8MVM#[nS||0:' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
/**
 * The WP_SITEURL and WP_HOME options are configured to access from any hostname or IP address.
 * If you want to access only from an specific domain, you can modify them. For example:
 *  define('WP_HOME','http://example.com');
 *  define('WP_SITEURL','http://example.com');
 *
 */
if ( defined( 'WP_CLI' ) ) {
	$_SERVER['HTTP_HOST'] = '127.0.0.1';
}

define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

/**
 * Disable pingback.ping xmlrpc method to prevent WordPress from participating in DDoS attacks
 * More info at: https://docs.bitnami.com/general/apps/wordpress/troubleshooting/xmlrpc-and-pingback/
 */
if ( !defined( 'WP_CLI' ) ) {
	// remove x-pingback HTTP header
	add_filter("wp_headers", function($headers) {
		unset($headers["X-Pingback"]);
		return $headers;
	});
	// disable pingbacks
	add_filter( "xmlrpc_methods", function( $methods ) {
		unset( $methods["pingback.ping"] );
		return $methods;
	});
}
