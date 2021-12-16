<?php

namespace PHPSTORM_META {

	override(
		\Google\Web_Stories\Services::get(),

		// TODO: I'd like to use Plugin::SERVICES directly here but it doesn't seem to work.
		map( [
			'activation_notice'            => \Google\Web_Stories\Admin\Activation_Notice::class,
			'admin.google_fonts'           => \Google\Web_Stories\Admin\Google_Fonts::class,
			'amp_output_buffer'            => \Google\Web_Stories\AMP\Output_Buffer::class,
			'amp_story_player_assets'      => \Google\Web_Stories\AMP_Story_Player_Assets::class,
			'adsense'                      => \Google\Web_Stories\AdSense::class,
			'ad_manager'                   => \Google\Web_Stories\Ad_Manager::class,
			'admin'                        => \Google\Web_Stories\Admin\Admin::class,
			'analytics'                    => \Google\Web_Stories\Analytics::class,
			'coi'                          => \Google\Web_Stories\Admin\Cross_Origin_Isolation::class,
			'customizer'                   => \Google\Web_Stories\Admin\Customizer::class,
			'dashboard'                    => \Google\Web_Stories\Admin\Dashboard::class,
			'database_upgrader'            => \Google\Web_Stories\Database_Upgrader::class,
			'discovery'                    => \Google\Web_Stories\Discovery::class,
			'editor'                       => \Google\Web_Stories\Admin\Editor::class,
			'embed_shortcode'              => \Google\Web_Stories\Shortcode\Embed_Shortcode::class,
			'experiments'                  => \Google\Web_Stories\Experiments::class,
			'integrations.amp'             => \Google\Web_Stories\Integrations\AMP::class,
			'integrations.jetpack'         => \Google\Web_Stories\Integrations\Jetpack::class,
			'integrations.nextgen_gallery' => \Google\Web_Stories\Integrations\NextGen_Gallery::class,
			'integrations.sitekit'         => \Google\Web_Stories\Integrations\Site_Kit::class,
			'integrations.themes_support'  => \Google\Web_Stories\Integrations\Core_Themes_Support::class,
			'imgareaselect_patch'          => \Google\Web_Stories\Admin\ImgAreaSelect_Patch::class,
			'kses'                         => \Google\Web_Stories\KSES::class,
			'media.base_color'             => \Google\Web_Stories\Media\Base_Color::class,
			'media.blurhash'               => \Google\Web_Stories\Media\Blurhash::class,
			'media.image_sizes'            => \Google\Web_Stories\Media\Image_Sizes::class,
			'media.media_source'           => \Google\Web_Stories\Media\Media_Source_Taxonomy::class,
			'media.video.captions'         => \Google\Web_Stories\Media\Video\Captions::class,
			'media.video.muting'           => \Google\Web_Stories\Media\Video\Muting::class,
			'media.video.optimization'     => \Google\Web_Stories\Media\Video\Optimization::class,
			'media.video.poster'           => \Google\Web_Stories\Media\Video\Poster::class,
			'media.video.trimming'         => \Google\Web_Stories\Media\Video\Trimming::class,
			'font_post_type'               => \Google\Web_Stories\Font_Post_Type::class,
			'page_template_post_type'      => \Google\Web_Stories\Page_Template_Post_Type::class,
			'plugin_row_meta'              => \Google\Web_Stories\Admin\PluginRowMeta::class,
			'plugin_action_links'          => \Google\Web_Stories\Admin\PluginActionLinks::class,
			'meta_boxes'                   => \Google\Web_Stories\Admin\Meta_Boxes::class,
			'settings'                     => \Google\Web_Stories\Settings::class,
			'site_health'                  => \Google\Web_Stories\Admin\Site_Health::class,
			'story_archive'                => \Google\Web_Stories\Story_Archive::class,
			'story_post_type'              => \Google\Web_Stories\Story_Post_Type::class,
			'story_shortcode'              => \Google\Web_Stories\Shortcode\Stories_Shortcode::class,
			'svg'                          => \Google\Web_Stories\Media\SVG::class,
			'tracking'                     => \Google\Web_Stories\Tracking::class,
			'tinymce'                      => \Google\Web_Stories\Admin\TinyMCE::class,
			'register.widget'              => \Google\Web_Stories\Register_Widget::class,
			'renderer.archives'            => \Google\Web_Stories\Renderer\Archives::class,
			'renderer.single'              => \Google\Web_Stories\Renderer\Single::class,
			'renderer.oembed'              => \Google\Web_Stories\Renderer\Oembed::class,
			'renderer.feed'                => \Google\Web_Stories\Renderer\Feed::class,
			'user.capabilities'            => \Google\Web_Stories\User\Capabilities::class,
			'rest.embed_controller'        => \Google\Web_Stories\REST_API\Embed_Controller::class,
			'rest.link_controller'         => \Google\Web_Stories\REST_API\Link_Controller::class,
			'rest.hotlinking_controller'   => \Google\Web_Stories\REST_API\Hotlinking_Controller::class,
			'rest.publisher_logos'         => \Google\Web_Stories\REST_API\Publisher_Logos_Controller::class,
			'rest.status_check_controller' => \Google\Web_Stories\REST_API\Status_Check_Controller::class,
			'rest.stories_autosave'        => \Google\Web_Stories\REST_API\Stories_Autosaves_Controller::class,
			'rest.stories_lock'            => \Google\Web_Stories\REST_API\Stories_Lock_Controller::class,
			'rest.media'                   => \Google\Web_Stories\REST_API\Stories_Media_Controller::class,
			'rest.settings'                => \Google\Web_Stories\REST_API\Stories_Settings_Controller::class,
			'rest.users'                   => \Google\Web_Stories\REST_API\Stories_Users_Controller::class,
			'rest.taxonomies'              => \Google\Web_Stories\REST_API\Stories_Taxonomies_Controller::class,
			'rest.template_autosave'       => \Google\Web_Stories\REST_API\Template_Autosaves_Controller::class,
			'rest.template_lock'           => \Google\Web_Stories\REST_API\Template_Lock_Controller::class,
			'taxonomy.category'            => \Google\Web_Stories\Taxonomy\Category_Taxonomy::class,
			'taxonomy.tag'                 => \Google\Web_Stories\Taxonomy\Tag_Taxonomy::class,
			'user_preferences'             => \Google\Web_Stories\User\Preferences::class,
			'web_stories_block'            => \Google\Web_Stories\Block\Web_Stories_Block::class,
			'injector'                     => \Google\Web_Stories\Infrastructure\Injector::class,
		] )
	);

	// For the injector, the return type should be the same as what the provided FQCN represents.
	override(
		\Google\Web_Stories\Infrastructure\Injector::make(),
		map( [ '' => '@' ] )
	);
}
