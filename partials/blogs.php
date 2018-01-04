<h1>posts</h1>
<ul>
    <li ng-repeat="post in posts">
        <a href="{{post.slug}}">
            <h2>{{post.title.rendered}}</h2>
            <?php
            $image_url =  '.{{post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}}.';
            if($image_url){
            ?>
            <div class="feature-thumbnail">
                <img src="{{post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}}" alt="">

            </div>
            <?php }?>
            <div class="excerpt">
                {{post.excerpt.rendered}}
            </div>
            <div class="categories">
                <ul>
                    <li ng-repeat="category in post.categories">
                        <a href="{{category}}">
                            {{category}}
                        </a>

                    </li>
                </ul>
            </div>
        </a>
    </li>
</ul>