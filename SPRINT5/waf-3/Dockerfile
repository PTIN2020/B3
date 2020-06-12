FROM nginx:1.15.3-alpine
RUN set -xe && \
    apk --no-cache update && \
        apk add --no-cache --virtual .build-deps \
        gcc \
        libc-dev \
        make \
        openssl-dev \
        pcre-dev \
        zlib-dev \
        linux-headers \
        curl \
        gnupg \
        libxslt-dev \
        gd-dev \
        perl-dev \
        py-pip \
        py-setuptools \
    && apk add --no-cache --virtual .libmodsecurity-deps \
        pcre-dev \
        libxml2-dev \
        automake \
        autoconf \
        g++ \
        flex \
        bison \
        yajl-dev \
    # dependencies that should not be removed
    && apk add --no-cache \
        libtool \
        doxygen \
        geoip \
        geoip-dev \
        yajl \
        libstdc++ \
        git \
        sed \
        python

# install aws cli
RUN set -xe && \
    pip --no-cache-dir install --upgrade pip && \
    pip --no-cache-dir install awscli

# install modsecurity
WORKDIR /opt/ModSecurity
RUN set -xe && \
    git clone -b v3/master --single-branch https://github.com/SpiderLabs/ModSecurity . && \
    git submodule init && \
    git submodule update && \
    ./build.sh && \
    ./configure && make && make install

# install nginx connector
WORKDIR /opt
RUN git clone --depth 1 https://github.com/SpiderLabs/ModSecurity-nginx.git && \
    wget http://nginx.org/download/nginx-$NGINX_VERSION.tar.gz && \
    tar zxvf nginx-$NGINX_VERSION.tar.gz

WORKDIR /opt/nginx-$NGINX_VERSION
RUN set -xe && \
    ./configure --with-compat --add-dynamic-module=../ModSecurity-nginx && \
    make modules && \
    cp objs/ngx_http_modsecurity_module.so /etc/nginx/modules

# install owasp ruleset
WORKDIR /opt
RUN set -xe && \
git clone -b v3.2/master https://github.com/coreruleset/coreruleset.git && \
mv coreruleset/ /usr/local/ && \
mv /usr/local/coreruleset/rules/REQUEST-900-EXCLUSION-RULES-BEFORE-CRS.conf.example  /usr/local/coreruleset/rules/REQUEST-900-EXCLUSION-RULES-BEFORE-CRS.conf && \
mv /usr/local/coreruleset/rules/RESPONSE-999-EXCLUSION-RULES-AFTER-CRS.conf.example  /usr/local/coreruleset/rules/RESPONSE-999-EXCLUSION-RULES-AFTER-CRS.conf 

RUN set -xe && \
    mkdir /etc/nginx/modsec && \
    echo 'load_module modules/ngx_http_modsecurity_module.so;' | cat - /etc/nginx/nginx.conf > temp && \
    mv temp /etc/nginx/nginx.conf

#    rm -fr /etc/nginx/nginx.conf


#COPY nginx.conf /etc/nginx/nginx.conf
COPY modsec_includes.conf /etc/nginx/modsec_includes.conf
COPY modsecurity.conf /etc/nginx/modsecurity.conf
COPY unicode.mapping /etc/nginx/unicode.mapping
COPY crs-setup.conf /etc/nginx/crs-setup.conf
# ADD ./certs/server.crt /usr/local/certs/server.crt
# ADD ./certs/server.key /usr/local/certs/server.key

RUN \
    chmod -R 755 /etc/nginx/

    

# remove unnecessary stuff
RUN set -xe && \
    apk del .build-deps && \
    apk del .libmodsecurity-deps && \
    rm -fr ModSecurity && \
    rm -fr ModSecurity-nginx && \
    rm -fr nginx-$NGINX_VERSION.tar.gz && \
    rm -fr nginx-$NGINX_VERSION
    #rm -fr /etc/nginx/conf.d



CMD nginx -g 'daemon off;'
EXPOSE 80
