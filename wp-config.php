<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wid03_new19');

/** MySQL database username */
define('DB_USER', 'wid03_new19');

/** MySQL database password */
define('DB_PASSWORD', '2IT)i1g0#p');

/** MySQL hostname */
define('DB_HOST', 'wid03.mysql.tools');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'T%FGW)VBkpoUEK^ugkxrLh8x*!RUA#!0FtoXcm91G#jK0FtnCooCedgwi#Am%aPP');
define('SECURE_AUTH_KEY',  'qlCtKKscp(QiilVW%i&vfuZQz%KFHDbweE&G9PMqsA!ncPQ@Rjq1Qt15e&Kqlrfp');
define('LOGGED_IN_KEY',    '9@4YC(F5q7bfFjieWj1TQ%Swe&VMGg%hSa7tPFNAh@F9JV2FRywg1PdzbVg!CQRI');
define('NONCE_KEY',        'k&oTMTwy6I@wahqjzf)1nFVbjDuhE4zNjBWIZ0rqGDj%dnaw7HztSmiGWR^5pRGV');
define('AUTH_SALT',        'oloG5RhNU%r^SgApflBKBAsD)EfuKU%XTejjvtW1tEbjVbC4d0ixTjrC3mN)o*bA');
define('SECURE_AUTH_SALT', 'JxgyCAtfI0H&MRbXUL^6^!nac2NN4&we4)G%VnP(%NttJmUixADB38HB)OAJzY1!');
define('LOGGED_IN_SALT',   'WTcBri2Xw0LHkCni4j*PKvxqVgBBNxCnXzErNRFG9fDCz58NSHjkt9w!&S57KQ7X');
define('NONCE_SALT',       'eBNh!jF^focgs4L05ZFqYplAaAY0yc)AAHlqoERCg22H*ePp5JtI@WvjntZvGRvp');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define( 'WP_ALLOW_MULTISITE', true );

define ('FS_METHOD', 'direct');
