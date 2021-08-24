<?php
    $page = $_SERVER['REQUEST_URI'];

    $backLinks = [
        "/videos" => "/",
        "/single-video" => "/videos",
        "/log-in" => "/"
    ];



?>

<header class="site-header">

    <?php
    
        if (!empty($backLinks[$page])){
            echo '
                <a class="link-back" href="'.$backLinks[$page].'">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.1875 13.7812L7.8125 13.1875C7.96875 13.0312 7.96875 12.7812 7.8125 12.6562L2.96875 7.8125L13.625 7.8125C13.8438 7.8125 14 7.625 14 7.4375L14 6.5625C14 6.34375 13.8438 6.1875 13.625 6.1875L2.96875 6.1875L7.8125 1.3125C7.96875 1.1875 7.96875 0.937499 7.8125 0.781249L7.1875 0.187499C7.0625 0.0312494 6.8125 0.0312494 6.65625 0.187499L0.125001 6.71875C-0.031249 6.875 -0.031249 7.09375 0.125001 7.25L6.65625 13.7812C6.8125 13.9375 7.0625 13.9375 7.1875 13.7812Z" fill="black"/>
                    </svg>
                </a>
            ';
        }

    ?>

    <div id="nav-button" class="nav-button">
        <svg class="nav-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
                d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
        <svg class="nav-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
        </svg>
    </div>

    <div class="menu">
        <ul class="menu-list">
            <li class="list-item"><a href=""></a></li>
        </ul>
    </div>
</header>